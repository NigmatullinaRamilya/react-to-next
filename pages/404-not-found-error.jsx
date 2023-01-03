export async function getStaticProps(context) {
  return {
    notFound: true, // triggers 404
  };
}

export default function NotFoundError() {
  return (
    <div>
      <h1>You won't see this title. You'll see the custom 404 page instead.</h1>
    </div>
  );
}
