import Link from "next/link";
import Star from "@/components/star";
import Styles from "./style.module.css";

export default function LinkButton({ children, href }) {
  return (
    <div className="flex justify-center items-center mt-8">
      <Link href={href} className={Styles.button}>
        {children}
        <Star className={Styles.star1} />
        <Star className={Styles.star2} />
        <Star className={Styles.star3} />
        <Star className={Styles.star4} />
        <Star className={Styles.star5} />
        <Star className={Styles.star6} />
      </Link>
    </div>
  );
}