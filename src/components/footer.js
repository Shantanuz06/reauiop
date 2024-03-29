import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="flex w-full max-w-screen-l flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-center">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 reauiOp &middot;
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="/"
            color="blue-gray"
            className="footer__item"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}