import { redirect } from "next/navigation";

export default function NextNavigationRedirect() {
  return (
    <>
      <p>You should never see this.</p>
      <button onClick={() => redirect("https://nextjs.org")}>
        Click to redirect
      </button>
    </>
  );
}
