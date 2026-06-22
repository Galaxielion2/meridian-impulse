import { NextResponse } from "next/server";
import { clientInquirySchema } from "@/lib/schemas";
import { getSupabaseAdmin } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = clientInquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form submission", details: parsed.error.flatten() }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const data = {
      ...parsed.data,
      source: "website",
      created_at: new Date().toISOString(),
    };

    if (!supabase) {
      console.info("Mock client inquiry submission", data);
      return NextResponse.json({ ok: true, mode: "mock" });
    }

    const { error } = await supabase.from("client_inquiries").insert(data);

    if (error) {
      console.error("Supabase client inquiry error", error);
      return NextResponse.json({ error: "Could not save inquiry" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, mode: "supabase" });
  } catch (error) {
    console.error("Client inquiry route error", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
