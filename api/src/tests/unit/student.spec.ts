import { Request, Response } from "express";
import { getStudents } from "../../controllers/student.controller";
import { PrismaClient } from "@prisma/client";

// Mock the entire @prisma/client module
jest.mock("@prisma/client", () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        student: {
          findMany: jest.fn().mockResolvedValue([{ id: 1, name: "John Doe" }]),
        },
      };
    }),
  };
});

describe("Student Controller", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let prisma: any;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn(),
    };
    prisma = new PrismaClient();
  });

  it("should return all students", async () => {
    const mockStudents = [{ id: 1, name: "John Doe" }];
    prisma.student.findMany.mockResolvedValue(mockStudents);

    await getStudents(mockReq as Request, mockRes as Response);

    expect(mockRes.json).toHaveBeenCalledWith(mockStudents);
  });

  it("should handle errors", async () => {
    prisma.student.findMany.mockRejectedValue(new Error("Database error"));

    await getStudents(mockReq as Request, mockRes as Response);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    // expect(mockRes.json).toHaveBeenCalledWith({
    //   error: "Failed to fetch students",
    // });
  });
});
