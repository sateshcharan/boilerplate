const capitalButton = ({ title }: { title: string }) => {
  const icon = title.charAt(0).toUpperCase();

  return (
    <>
      {icon} {title}
    </>
  );
};

export default capitalButton;
