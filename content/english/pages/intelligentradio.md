---
title: "Intelligent Radio"
meta_title: "Intelligent Radio"
description: "Intelligent Radio - The future of wireless spectrum."
image: "/images/5g.png"
draft: false


---

<div class="container-ir">
  <div class="content-ir">
    <h3>Radio and Spectrum</h3>
    <p>
      Radiofrequency technologies such as wireless communications, GPS, and radar are critical to the modern way of life. These technologies enable us to connect with each other, understand our environment, and share information across vast distances.<br/><br/>
      Radios will also power the future. They are the foundational infrastructure of disruptive technologies such as self-driving cars, smart cities, and industrial IoT, allowing a high-throughput, low-latency transfer of vast amounts of information. Consequently, their continued development and innovation are essential for building smarter, more connected, and resilient systems across industries.
    </p>
  </div>

  <div class="image-container-ir">
    {{< image src="images/city-2048x1358.png" caption="" alt="alter-text" position="right" command="fill" option="q100" class="img-fluid" title="image title" webp="false" >}}
  </div>
</div>

<style>
    .container-ir {
    display: flex;
    align-items: flex-start;
    gap: 60px;
    }

    .content-ir {
    flex: 1;
    }

    .content-ir p {
    margin-bottom: 0;
    }

    .image-container-ir {
    flex: 0 0 500px; /* fixed width */
    }

    /* Responsive: stack on small screens */
    @media (max-width: 1200px) {  /* adjust breakpoint as needed */
    .container-ir {
        flex-direction: column;
        gap: 20px;
    }

    .image-container-ir {
        flex: none;
        width: 100%; /* make image full width */
    }
    }
</style>

Radio technologies rely on wireless spectrum to operate. Spectrum is a finite and fixed resource, which is regulated by governments and international agreements. Every radio application technology operates on a section of spectrum that is assigned to it based on legislation, ownership of rights to the spectrum, and suitability.

As the demand for radio technologies increases, spectrum is increasingly congested, and the usage of it requires complex techniques (such as beamforming or MIMO) to ensure adequate performance.

{{< image src="images/us-spectrum.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

Today, we design our radio technology in a slow iterative manner. New concepts are explored in academic research, investigated by industry bodies, and written into the roadmaps of standards by bodies such as 3GPP and IEEE. Industries pick up these technologies as they become available, enabling new performance and new applications. Widespread radio technologies such as 802.11 (Wi-Fi) and LTE were developed in this manner. These radios are fixed-function and are designed to perform a single task, in a consistent environment, with a pre-defined level of performance.

But with new technologies comes increasing demand, and fixed-function radios are insufficient. Radios that can serve multiple purposes and adapt are critical to ensure the operations of technologies that rely on radio. Software-defined radios were created to solve this problem, but software-defined radios are subject to the same challenges of slow human-driven radio systems development.

## What are Intelligent Radios?

Intelligent radios, which are fully autonomous AI-enabled radiofrequency systems, will be the future of wireless communications. They are able able to recognize spectral conditions, and autonomously learn how to achieve their objectives in a complex spectral environment, transmitting and receiving, and adapting on demand.

Intelligent radios will be able to:

- Perform signal processing tasks with less computational intensity or system complexity.
- Sense and adapt to changing environmental conditions, such as noise, congestion, or interference.
- Sense other radios, learn then use the protocols those devices are are using to communicate.
- Generate new communications protocols, that can transmit more information more robustly than human-designed ones.
- Propagate learned protocols with other intelligent radios.
- Collaborate with other intelligent radios to share available spectrum, or to adapt around evolving conditions.

As our need for radio technologies scales and becomes more complex, intelligent radio technologies will ensure our radio infrastructure can keep up with demand. Intelligent radios will enable smart cities, self-driving cars, Industrial IoT, and future 6G networks.

## Building Intelligent Radios 

Like other AI-based and autonomous technologies, the development of intelligent radio technology will be an iterative challenge.

Today, machine learning technology is used to build "passive" intelligent radios, devices that can passively sense activity on spectrum. In the near-term, as technical challenges are overcome, intelligent radios will gain the skill of autonomously manipulating some of their transmit behaviours. In the future, technology will advance to the point of general radio intelligence, where devices will be fully interoperable, communicating without any human involvement.

**_[The advancement of "radio intelligence" can be likened to the "levels of autonomy" that is used to describe autonomous vehicles.](/blog/2108-5-levels-of-intelligent-radio/)_**

<div class="button-group" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
  <style>
    .button-group a {
      text-decoration: none;
    }
  </style>
  {{< button label="Let's build intelligent radios together" link="/prototyping" style="solid" >}}
</div>

## Radio Inference Applications



Radio inference applications (RIA) are software programs that perform machine learning inference on data from radio signals. Often integrated into RAN systems, RIA drives the creation of intelligent radios, unlocking solutions in an increasingly congested, contested, and complex wireless spectrum.



RIA Hub is an AI development platform for engineers who are building next-generation wireless communications technologies, which rely heavily on machine learning. RIA Hub bridges the gap between expert-designed signal processing and machine learning workflows, helping save time and engineering resources in the deployment of machine learning into radio. RIA Hub is an MLOps platform tailored for radio, that enables engineers to build, deploy, and retrain prediction services to cloud and edge.

RIA Hub is build on the RIA Toolkit, a library of robust tools for signal synthesis, dataset curation, naive model training, model testing, and model integration for a range of sensing tasks, such as classification, filtering, segmentation, and detection.

<div class="button-group" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
  <style>
    .button-group a {
      text-decoration: none;
    }
  </style>
  {{< button label="Learn more about the RIA Toolkit" link="/riatoolkit" style="solid" >}}
  {{< button label="Learn more about RIA Hub" link="/riahub" style="outline" >}}
</div>

<div style="max-width: 300px; margin: -20px auto; text-align: center;">
  {{< image 
      src="images/ria-logo.png" 
      alt="RIA logo" 
      class="img-fluid"
      style="display: block; margin: 0 auto;"
  >}}
</div>
