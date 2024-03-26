
export default function Page({ params }: { params: { user_id: string } }) {
  return (
    <>
      <p>Hello! {params.user_id}</p>
    </>
  );
}