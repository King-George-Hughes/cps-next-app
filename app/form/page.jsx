import Link from "next/link";

const GoogleForm = () => {
  return (
    <div>
      <div>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeCpWidrWfnAIXKSUItg3xfcZw_cgNmSWlfxrn8CFwhKdaPbQ/viewform?usp=sf_link"
          target="_blank"
        >
          Fill The Forms
        </Link>
      </div>
      {/* <div className="w-full h-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCpWidrWfnAIXKSUItg3xfcZw_cgNmSWlfxrn8CFwhKdaPbQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div> */}
    </div>
  );
};

export default GoogleForm;
