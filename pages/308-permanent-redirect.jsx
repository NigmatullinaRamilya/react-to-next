export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/page',
      permanent: true, // triggers 308
    },
  };
}

export default function PermanentRedirect() {
  return (
    <div>
      <h1>You won't see this title. This page will return the 308th HTTP status.</h1>
    </div>
  );
}
