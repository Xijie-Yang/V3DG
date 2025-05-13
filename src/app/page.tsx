import styles from "./page.module.css";
import { FaGithub, FaFilePdf, FaCity, FaYoutube } from "react-icons/fa";
// import { IoLibrary } from "react-icons/io5";
import { SiArxiv } from "react-icons/si";

const Text_Reference_ACM: string = `Xijie Yang, Linning Xu, Lihan Jiang, Dahua Lin, and Bo Dai. 2025. Virtualized 3D Gaussians: Flexible Cluster-based Level-of-Detail System for Real-Time Rendering of Composed Scenes. In Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers (SIGGRAPH Conference Papers ’25), August 10–14, 2025, Vancouver, BC, Canada. ACM, New York, NY, USA, 11 pages. https://doi.org/10.1145/3721238.3730602`;

const Text_Reference_BibTeX: string = `@inproceedings{Yang2025V3DG,
    author = {Yang, Xijie and Xu, Linning and Jiang, Lihan and Lin, Dahua and Dai, Bo},
    title = {Virtualized 3D Gaussians: Flexible Cluster-based Level-of-Detail System for Real-Time Rendering of Composed Scenes},
    booktitle = {ACM SIGGRAPH 2025 Conference Papers},
    year = {2025},
    doi = {10.1145/3721238.3730602},
    url = {https://doi.org/10.1145/3721238.3730602},
    publisher = {Association for Computing Machinery},
    series = {SIGGRAPH '25}
}`;

const Padding_Top: string = "48px";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1
          style={{
            fontSize: "48px",
          }}
        >
          Virtualized 3D Gaussians (V3DG)
        </h1>

        <h2
          style={{
            fontSize: "32px",
          }}
        >
          Flexible Cluster-based Level-of-Detail System for Real-Time Rendering
          of Composed Scenes
        </h2>

        <p
          style={{
            fontSize: "24px",
          }}
        >
          (SIGGRAPH 2025 Conference Paper)
        </p>

        <p
          style={{
            fontSize: "22px",
          }}
        >
          <a href="https://orcid.org/0009-0009-3076-2595">Xijie Yang</a>
          <sup>1,2</sup>,{" "}
          <a href="https://eveneveno.github.io/lnxu/">Linning Xu</a>
          <sup>3</sup>, <a href="https://jianglh-whu.github.io">Lihan Jiang</a>
          <sup>4,2</sup>, <a href="http://dahua.site">Dahua Lin</a>
          <sup>3,2</sup>, <a href="https://daibo.info">Bo Dai</a>
          <sup>5,6</sup>
        </p>

        <p
          style={{
            fontSize: "16px",
          }}
        >
          <sup>1</sup> Zhejiang University, <sup>2</sup> Shanghai Artificial
          Intelligence Laboratory, <sup>3</sup> The Chinese University of Hong
          Kong, <sup>4</sup> University of Science and Technology of China,{" "}
          <sup>5</sup> The University of Hong Kong, <sup>6</sup> Feeling AI
        </p>

        <div className={styles.ctas}>
          <a
            href="https://arxiv.org/abs/2505.06523"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiArxiv />
            arXiv
          </a>
          <a
            href="https://arxiv.org/pdf/2505.06523"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            Paper
          </a>
          {/* <a
            href="https://doi.org/10.1145/3721238.3730602"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLibrary />
            ACM
          </a> */}
          <a
            href="https://github.com/city-super/V3DG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Code
          </a>
          <a
            href="https://youtu.be/K0J5ePcWyrg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
            Supplementary Video
          </a>
        </div>

        <p>
          V3DG achieves <b>real-time rendering</b> of massive 3D Gaussians in
          large <b>composed scenes</b> through a novel <b>LOD</b> approach.
          Inspired by{" "}
          <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/nanite-virtualized-geometry-in-unreal-engine">
            Nanite
          </a>{" "}
          in Unreal Engine 5, V3DG processes detailed 3D assets into{" "}
          <b>clusters at various granularities</b> offline, and{" "}
          <b>selectively renders</b> 3D Gaussians at runtime —flexibly{" "}
          <b>balancing rendering speed and visual fidelity</b> based on
          user-defined tolerances.
        </p>

        <video
          src="./static/video-composed-scenes.mp4"
          controls
          autoPlay
          loop
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></video>

        <h2 style={{ paddingTop: Padding_Top }}>Framework</h2>

        <img
          src="./static/framework.jpeg"
          alt="V3DG framework"
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p>
          Our virtualized LOD system features the <b>offline build stage</b> to{" "}
          <b>prepare clusters</b> at various levels of detail, and the{" "}
          <b>online selection stage</b> to <b>select clusters</b> at appropriate
          levels of detail given rendering conditions.
        </p>

        <h2 style={{ paddingTop: Padding_Top }}>
          Local Splatting for Simplification
        </h2>

        <img
          src="./static/Method-local-splatting.jpeg"
          alt="V3DG local splatting"
          style={{
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p>
          To preserve visual quality while reducing the number of 3D Gaussians
          by half locally in each cluster group, we develop the{" "}
          <b>local splatting</b> method, leveraging the differentiable feature
          of 3D Gaussians. Randomly generated pseudo-views are positioned to
          face the center of the cluster group, used to iteratively optimize the
          properties of the newly-created 3D Gaussians. This process{" "}
          <b>distills the appearance</b> of original 3D Gaussians layer by
          layer.
        </p>

        <h2 style={{ paddingTop: Padding_Top }}>Results</h2>

        <img
          src="./static/Ablation-visual-iters.jpeg"
          alt="V3DG ablation iters"
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p>
          The more the <b>simplification iteration</b>, the similar the renders
          with vanilla 3DGS.
        </p>

        <img
          src="./static/Ablation-visual-taus.jpeg"
          alt="V3DG ablation taus"
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p>
          Users can adjust <b>footprint tolerances</b> to balance visual quality
          and rendering speed.
        </p>

        <video
          controls
          autoPlay
          loop
          style={{
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <source src="./static/video-comparison-h3dg.mp4" type="video/mp4" />
        </video>

        <img
          src="./static/Comparison-visual.jpeg"
          alt="V3DG comparison"
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p>
          Our LOD method achieves <b>better quality</b> than baselines.
        </p>

        <h2 style={{ paddingTop: Padding_Top }}>Text Citation</h2>
        <pre>
          <code>{Text_Reference_ACM}</code>
        </pre>

        <h2>BibTeX Citation</h2>
        <pre>
          <code>{Text_Reference_BibTeX}</code>
        </pre>

        <div className={styles.ctas}>
          <a
            href="https://city-super.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCity />
            CitySuper Projects
          </a>
        </div>
      </main>
    </div>
  );
}
