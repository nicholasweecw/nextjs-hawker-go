import { query } from "/lib/db"; // or use Prisma if that's your choice

export async function GET(request) {
  try {
    const result = await query("SELECT * FROM users;", []); // Update query if needed
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database error:", error); // Log the error to see details
    return new Response(
      JSON.stringify({ error: `Database query failed: ${error.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
