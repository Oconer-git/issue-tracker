import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";
import z from "zod";

const schema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const createdIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  return NextResponse.json(createdIssue, { status: 201 });
}
