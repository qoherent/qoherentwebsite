---
title: "RIA Hub"
meta_title: "RIA Hub for creating Radio Intelligence Apps"
description: "Suite for curating RF datasets, training models, and testing then deploying them."
image: "/images/5g.png"
draft: false


---
{{< notice "note" >}}
_RIA Hub is now available at [riahub.ai](https://riahub.ai). Public repos can be explored, but access to the application and its tools are only through the private beta._
{{< /notice >}}

_**Radio Inference Applications Hub (RIA Hub)**_ by Qoherent is an AI development platform for software-defined radios, designed for radio signal processing engineers and researchers in wireless technologies. RIA accelerates intelligent radio development by significantly reducing integration between stages, allowing a sharper focus on innovation. The platform streamlines dataset creation, algorithm design, and model deployment, enhancing productivity and reducing project timelines. Built on a foundation of open-source accessibility, a comprehensive IP library, and automation capabilities, *RIA drives the creation of intelligent radios*, unlocking solutions in an increasingly congested and challenged wireless spectrum.


#### End-to-end workflow for deploying machine learning into software-defined radios
- Automated and procedural signal generation in Python, GNU Radio and MATLAB, as well as SDR testbed control for over-the-air emulation.
- Plugins for popular signal processing and deep learning back ends.
- Automated design, training, and optimizations of high performance models.
- Automated testing, integration, and deployment into SDR-enabled systems, including OpenRAN-ready 5G solutions.
- Tools for sharing datasets, models, and inference applications with colleagues and the broader community.

#### Comprehensive reference library
- Labelled datasets, pre-trained models, and optimized inference applications for radio.
- Reference designs for radio ML solutions.
- Example workflows and reusable actions for common tasks.
- Open Source and community libraries.

#### The development workflow you love, tailored for radio
- RIA Hub is built on <a href="https://github.com/go-gitea/gitea">Gitea</a>, an open-source DevOps platform.
- Write workflows in GitHub Actions-flavoured YAML.
- Store and version datasets and models directly in repositories using Git LFS.
- Manage containerized inference applications on the RIA Hub Container Registry.

<div class="button-group" style="display: flex; gap: 1rem;">
  <style>
    .button-group a {
      text-decoration: none;
    }
  </style>
  {{< button label="Sign Up for the RIA Hub beta" link="https://docs.google.com/forms/d/e/1FAIpQLSeQn7aMOljwtQeaiRs1TaHZknAzyf8BJmxtiiGH9V4NQ0ZDnA/viewform?usp=header" style="solid" >}}
  {{< button label="Go to RIA Hub" link="https://riahub.ai" style="outline" >}}
</div>
