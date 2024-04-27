import Image from "next/image";
import styles from "../page.module.css";


export default function Publications() {
    return <div style={{ width: "100%", height: "290px", backgroundColor: "#f3f3f3", borderRadius: "15px", display: "flex", marginTop: "20px", paddingRight: "40px" }}>
        <Image src={"/images/n.jpg"} alt="Spectrogram" width={270} height={270} style={{ borderRadius: "15px", marginTop: "10px", marginLeft: "10px" }} />
        <div style={{ width: "80%", marginTop: '30px', paddingLeft: '30px' }}>
            <h1 style={{ fontWeight: 400 }}>Resampling Base Distribution for Normalizing Flow in LARS Sampling method</h1>

            {/* journal and coding framework */}
            <div style={{ marginTop: "40px", display: "flex" }}>
                <p style={{ backgroundColor: "#222", color: "white", width: "200px", height: "35px", display: "flex", alignItems: "center", borderRadius: 100, fontSize: '13px', justifyContent: "center" }}>@Nature neuroscience</p>

                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", marginLeft: "30px" }}>
                    <Image src={'/icons/pyt.jpg'} width={22} height={22} style={{ borderRadius: "100px" }} alt="PyTorch" />
                    <p style={{ fontSize: "14px" }}>&nbsp;PyTorch</p>
                </div>
            </div>

            {/* Abstract */}
            <div className={styles.pub_abstract}>
                <p style={{ fontSize: "15px", color: "#757373" }}>Extensive experimental results demonstrate that expressive instructions are crucial to instruction-based image editing, and our MGIE can lead to a notable improvement in automatic metrics and human evaluation while maintaining competitive inference efficiency.  </p>
            </div>

            <br />
            <div className={styles.buttons}>
                <a href="https://doi.org/2401.293944">Paper</a>
                <a href="https://doi.org/2401.293944" style={{marginLeft: "20px"}}>Code</a>
                <a href="https://doi.org/2401.293944" style={{color: "#2D4CEE", marginLeft: "20px"}}>Inference API</a>
            </div>


            <div style={{position: "relative", marginTop: "-45px", right: 0, left: "90%" ,fontSize: 13}}>
                <ul>
                    <li>29 Dec 2024</li>
                </ul>
            </div>

        </div>
    </div>
}