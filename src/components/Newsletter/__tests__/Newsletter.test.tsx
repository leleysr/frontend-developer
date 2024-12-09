import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Newsletter } from "../Newsletter";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn(() => Promise.resolve({ status: "success" })),
  })
) as jest.Mock;

describe("Newsletter Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the newsletter form", () => {
    render(<Newsletter />);

    expect(screen.getByText(/participe de nossas news/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/digite seu nome/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite seu email/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/eu quero!/i)).toBeInTheDocument();
  });

  test("submits the form with valid data", async () => {
    render(<Newsletter />);

    fireEvent.change(screen.getByPlaceholderText(/digite seu nome/i), {
      target: { value: "João" },
    });
    fireEvent.change(screen.getByPlaceholderText(/digite seu email/i), {
      target: { value: "joao@example.com" },
    });

    fireEvent.click(screen.getByText(/eu quero!/i));

    await waitFor(() =>
      expect(screen.getByText(/seu e-mail foi cadastrado/i)).toBeInTheDocument()
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test("displays validation errors if the fields are empty", async () => {
    render(<Newsletter />);

    fireEvent.click(screen.getByText(/eu quero!/i));

    await waitFor(() => {
      expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
    });
  });

  test("shows success message after successful submission", async () => {
    render(<Newsletter />);

    fireEvent.change(screen.getByPlaceholderText(/digite seu nome/i), {
      target: { value: "Carlos" },
    });
    fireEvent.change(screen.getByPlaceholderText(/digite seu email/i), {
      target: { value: "carlos@example.com" },
    });

    fireEvent.click(screen.getByText(/eu quero!/i));

    await waitFor(() =>
      expect(
        screen.getByText(/seu e-mail foi cadastrado com sucesso/i)
      ).toBeInTheDocument()
    );
  });

  test('resets form when clicking on "Cadastrar novo e-mail" button', async () => {
    render(<Newsletter />);

    fireEvent.change(screen.getByPlaceholderText(/digite seu nome/i), {
      target: { value: "Carlos" },
    });
    fireEvent.change(screen.getByPlaceholderText(/digite seu email/i), {
      target: { value: "carlos@example.com" },
    });

    fireEvent.click(screen.getByText(/eu quero!/i));

    await waitFor(() =>
      expect(
        screen.getByText(/seu e-mail foi cadastrado com sucesso/i)
      ).toBeInTheDocument()
    );

    fireEvent.click(screen.getByText(/cadastrar novo e-mail/i));

    expect(
      (screen.getByPlaceholderText(/digite seu nome/i) as HTMLInputElement)
        .value
    ).toBe("");
    expect(
      (screen.getByPlaceholderText(/digite seu email/i) as HTMLInputElement)
        .value
    ).toBe("");
  });
});
