import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

type CommentProps = {
  comment: any;
};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Comment = ({ comment }: CommentProps) => (
  <div className="flex flex-col bg-n-8 border border-n-1/15 rounded-2xl">
    <div className="flex items-start px-5 py-6 bg-n-7 rounded-t-[0.9375rem] md:px-10">
      <div className="mr-4 min-w-[48px]">
        <Image
          className="opacity-60 mt-1"
          src={`${basePath}${comment.iconUrl}`}
          width={42}
          height={42}
          alt={comment.title}
        />
      </div>
      <div className="mr-5">
        <Link
          className="hover:text-n-9 transition-all"
          href={comment.url}
          target={comment.urlSuffix}
        >
          <h6 className="h6 leading-tight mb-1">{comment.title}</h6>
        </Link>
        <div className="caption text-n-1/25">{comment.type}</div>
      </div>
    </div>
    <div className="body-2 flex-1 px-5 py-10 md:px-10">{comment.text}</div>

    <div className="body-2 flex-1 px-5 pb-10 md:px-10">
      <Link
        className="hover:text-n-9 transition-all font-code uppercase text-xs font-bold tracking-wider items-center"
        href={comment.url}
        target={comment.urlSuffix}
      >
        Go to resource{" "}
        <RiArrowRightSLine size={30} className="inline-block -mt-1" />{" "}
        {comment.urlIcon === "LuExternalLink" && (
          <LuExternalLink size={16} className="inline-block -mt-1" />
        )}
      </Link>
    </div>
    {comment.AuthorAvatar && comment.AuthorName && (
      <div className="flex items-center px-5 py-6 bg-n-7 rounded-b-2xl md:px-10">
        <div className="mr-4 min-w-[48px]">
          <Image
            className="rounded-full border border-n-1/15"
            src={`${basePath}${comment.AuthorAvatar}`}
            width={60}
            height={60}
            alt={comment.AuthorName}
          />
        </div>
        <div>
          <span className="text-n-2 text-xs">Posted by:</span> <br />
          {comment.AuthorName}
        </div>
      </div>
    )}
  </div>
);

export default Comment;
