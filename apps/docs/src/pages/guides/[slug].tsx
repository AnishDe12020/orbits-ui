import { allGuides, Guide } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import ContentLayout from "src/layouts/ContentLayout";

interface IGuidePageProps {
  guide: Guide;
}

const GuidePage: NextPage<IGuidePageProps> = ({ guide }) => {
  const GuideMDXComponent = useMDXComponent(guide.body.code);

  return (
    <ContentLayout>
      <GuideMDXComponent />
    </ContentLayout>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const guide = allGuides.find((guide) => guide.slug === params?.slug);

  return {
    props: {
      guide,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allGuides.map((guide) => ({
    params: { slug: guide.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default GuidePage;
