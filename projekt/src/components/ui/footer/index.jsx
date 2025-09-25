import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import "./footer.scss";

export default function () {
    return (
        <>

            <div className="footer">

                <div className="footer-container">

                    <div className="footer-logo">

<div className="heading">
    
                        <img src="/icon.png" alt="swaphub-logo" width={32} height={32} className="logo" />
                    <h2>swaphub</h2>
</div>
                    <div className="footer-icons">
                        <Link href="#">
                            <BsTwitterX />
                        </Link>

                        <Link href="#">
                            <SlSocialInstagram />
                        </Link>

                        <Link href="#">
                            <TiSocialYoutube />
                        </Link>

                        <Link href="#">
                            <AiFillLinkedin />
                        </Link>
                    </div>

                </div>

                <section className="footer-section">

                    <h4>About SwapHub</h4>
                    <ul>
                        <li><Link href="#">How it works</Link></li>
                        <li><Link href="#">Community guidelines</Link></li>
                        <li><Link href="#">Our mission</Link></li>
                        <li><Link href="#">Contact us</Link></li>

                    </ul>
                </section>

                <section className="footer-section">

                    <h4>Discover</h4>
                    <ul>
                        <li><Link href="#">Browse categories</Link></li>
                        <li><Link href="#">popular Swaps</Link></li>
                        <li><Link href="#">Successful stories</Link></li>
                        <li><Link href="#">Upcoming events</Link></li>

                    </ul>
                </section>


                <section className="footer-section">

                    <h4>Support</h4>
                    <ul>
                        <li><Link href="#">Help Center</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                        <li><Link href="#">Safety tips</Link></li>
                        <li><Link href="#">Report an issue</Link></li>

                    </ul>
                </section>

            </div>


</div>



        </>
    )
}