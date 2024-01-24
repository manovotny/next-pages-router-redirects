export default function GetStaticPropsPage() {
  return <p>You should never see this.</p>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://nextjs.org",
      permanent: false,
    },
  };
};
