import React from "react";
import { render, screen } from "@testing-library/react";

import { useUsersQuery } from "../../../hooks/test/useInfiniteQueryhook";
import Infinite from "../../../pages/infinite";
import { staticForPage0 } from "../../../utils/fixtures";

// Make TypeScript Happy, by resolving TS errors
const mockedUseUsersQuery = useUsersQuery;

// Mock the hook module
jest.mock("../../../hooks/test/useInfiniteQueryhook");

describe("<Infinite />", () => {
  beforeEach(() => {
    mockedUseUsersQuery.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("렌더 충돌 테스트", () => {
    render(<Infinite />);
  });

  it("화면 로딩 문구 테스트", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: "loading",
    }));
    render(<Infinite />);

    expect(screen.getByText(/Loading users/i)).toBeInTheDocument();
  });

  it("화면 에러 문구 테스트", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: "error",
      error: {
        message: "An error occured!",
      },
    }));

    render(<Infinite />);

    expect(screen.getByText(/An error occured!/i)).toBeInTheDocument();
  });

  it("데이터 없는 경우에 대한 문구 테스트", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: "loaded",
      data: undefined,
    }));

    render(<Infinite />);

    expect(screen.getByText(/No users data found!/i)).toBeInTheDocument();
  });

  it("유저 리스트 데이터를 가져왔을 경우", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      status: "success",
      data: {
        pages: [{ results: staticForPage0.data, next: 1 }],
      },
    }));

    render(<Infinite />);

    expect(
      screen.getByText(
        `${staticForPage0.data[0].firstName} ${staticForPage0.data[0].lastName}`
      )
    ).toBeInTheDocument();
  });
});
