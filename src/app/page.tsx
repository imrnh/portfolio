"use client"

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Nunito } from "next/font/google";
import Publications from "./components/publications";
import BlogCard from "./components/blog_card";
import ProjectCard from "./components/project_card";

const nunito = Nunito({ weight: "400", subsets: ['latin'] });

export default function Home() {

  const menus_ref = useRef(null);

  const toggleMenu = (e: any) => {
    if (menus_ref.current) {
      menus_ref.current.style.display = menus_ref.current.style.display === 'block' ? 'none' : 'block';
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <code style={{ fontSize: 30, fontWeight: 700, color: "#2D4CEE" }}>Imran Hossen</code>
        <div>
          <Image className={styles.menu_toggler} onClick={toggleMenu} alt="menu" src={"/icons/menu.png"} width={30} height={30} style={{ cursor: "pointer", display: 'block' }}></Image>
          <ul id="menus" ref={menus_ref} className={styles.menu_ul} style={{display: "none"}}>
            <li style={{margin: "10px"}}>Publications</li>
            <li  style={{margin: "10px"}}>Blogs</li>
            <li  style={{margin: "10px"}}>Projects</li>
            <li style={{margin: "10px"}}>Download CV</li>
            <li style={{margin: "10px"}}>
              <button style={{width: "190px", height: "45px", borderRadius: "10px", backgroundColor: "#2D4CEE", color: "white", fontSize: "26px", border: "0", marginTop: "15px"}}>Contact</button>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.center}>
        <p style={{ fontSize: 60 }}>Researching</p>
        <p style={{ fontSize: 70, color: 'black', fontWeight: 600 }}>&nbsp;“genAI”&nbsp;</p>
        <p style={{ fontSize: 60 }}>and</p>
        <p style={{ fontSize: 70, color: 'black', fontWeight: 600 }}>&nbsp;“XAI”.&nbsp;</p>
        <p style={{ fontSize: 60 }}>Founded&nbsp;</p>
        <a href="https://echoscript.xyz"><p style={{ fontSize: 60, color: "#2D4CEE", fontWeight: 600 }}>@echoscript.</p></a>
      </div>

      <div className={styles.myself}>
        Independent researcher working with <b>Normalizing Flows</b>. CS undergraduate at KUET, BD, currently working with CNN visulization for thesis. My work ethic is characterized by an unwavering commitment to excellence whenever I encounter a field that inspires me. This dedication is rooted in my fundamental principle of authenticity.
      </div>



      {/* Research Papers */}
      <section className={styles.papers}>
        <div className={styles.header_papers}>
          <h1>Publications</h1  > <br />
          <p>All of my accepted papers and submissions in journals and conferences. </p>
        </div>

        <div className={styles.papers_cards_view}>
          <Publications />
          <Publications />
          <Publications />

          <center>
            <button className={`${styles.show_more_button} ${nunito.className}`}>
              Show More
            </button>
          </center>
        </div>
      </section>



      {/* Blogs Section */}
      <section className={`${styles.blog_section}`}>
        <h1>My Reading List</h1>
        <p style={{ color: "white", marginTop: '10px' }}>A blog about articles and literature I read.</p>

        <button className={`${styles.show_more_button} ${nunito.className}`} style={{ marginTop: "-10px", color: "white", textDecoration: "underline", backgroundColor: "transparent", width: "180px", height: "50px", fontSize: "16px", position: "absolute", right: "10%" }}>
          Show All
        </button>

        <div className={styles.blog_card_holder}>
          <BlogCard title="Why should you use CNN?" image="/images/img.png" />
          <BlogCard title="Resampling Base Distribution for Normalizing Flow in LARS Sampling method " image="/images/cnn.jpeg" />
          <BlogCard title="Diffusion process for the sake of normalizing diffusion mechanism" image="/images/spec.jpg" />
        </div>
        <center>

        </center>
        <br />

        <br />
        <br />
      </section>



      {/* Noteable Projects */}
      <section className={styles.noteable_projects}>
        <h1>Noteable Projects</h1>

        <div style={{ width: "100%", minHeight: "350px", marginTop: "40px", display: "flex", flexWrap: "wrap" }}>

          <ProjectCard title="Spotify" techs={["Java", "PostgreSQL"]} git_url="https://github.com/imrnh/spotify_java" description="In CSS, you typically don't directly get the width of a parent container and apply it to a child element. Instead, you set the width of the child element as a percentage or a specific value." />
          <ProjectCard title="Spotify" techs={["Java", "PostgreSQL"]} git_url="https://github.com/imrnh/spotify_java" description="In CSS, you typically don't directly get the width of a parent container and apply it to a child element. Instead, you set the width of the child element as a percentage or a specific value." />
          <ProjectCard title="Spotify" techs={["Java", "PostgreSQL"]} git_url="https://github.com/imrnh/spotify_java" description="In CSS, you typically don't directly get the width of a parent container and apply it to a child element. Instead, you set the width of the child element as a percentage or a specific value." />
          <ProjectCard title="Spotify" techs={["Java", "PostgreSQL"]} git_url="https://github.com/imrnh/spotify_java" description="In CSS, you typically don't directly get the width of a parent container and apply it to a child element. Instead, you set the width of the child element as a percentage or a specific value." />
          <ProjectCard title="Spotify" techs={["Java", "PostgreSQL"]} git_url="https://github.com/imrnh/spotify_java" description="In CSS, you typically don't directly get the width of a parent container and apply it to a child element. Instead, you set the width of the child element as a percentage or a specific value." />
          <ProjectCard title="Spotify" techs={["Java", "PostgreSQL"]} git_url="https://github.com/imrnh/spotify_java" description="In CSS, you typically don't directly get the width of a parent container and apply it to a child element. Instead, you set the width of the child element as a percentage or a specific value." />


        </div>

      </section>



    </main>
  );
}
