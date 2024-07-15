import BoxSpinner from "@/components/custom components/loadings/BoxSpinner";

const Loading = () => {
  return (
    <main className="flex flex-1 items-center justify-center">
      <BoxSpinner width={100} height={100} />
    </main>
  );
};

export default Loading;
