import { NextResponse } from "next/server";
import { talentApplicationSchema } from "@/lib/schemas";
import { getSupabaseAdmin } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = talentApplicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid application", details: parsed.error.flatten() }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const data = {
      ...parsed.data,
      source: "website",
      status: "new",
      created_at: new Date().toISOString(),
    };

    if (!supabase) {
      console.info("Mock talent application submission", data);
      return NextResponse.json({ ok: true, mode: "mock" });
    }

    const { error } = await supabase.from("talent_applications").insert(data);

    if (error) {
      console.error("Supabase talent application error", error);
      return NextResponse.json({ error: "Could not save application" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, mode: "supabase" });
  } catch (error) {
    console.error("Talent application route error", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
