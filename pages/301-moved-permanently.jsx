export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/page',
    },
  };
}

export default function MovedPermanently() {
  return (
    <div>
      <h1>You won't see this title. This page will return the 301th HTTP status.</h1>
    </div>
  );
}
