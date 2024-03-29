---
title: "Quantum Computing"
date: "2021-09-17"

draft: false
cover:
    # image img/example.jpg
    alt: 'Quantum computing in the 2020s.'
    caption: 'Control a phone from another loction'
tags: ['quantum','Qoherent']
categories: ['articles']


---

Qoherent is focused on heterogeneous computing, and is investigating the deployment of a new processing type, _**quantum computing**_, into the mix. Qoherent's objectives are to produce research, solutions, and exploration tools for deploying quantum computing into intelligent radio applications. Qoherent investigates quantum enhancements to it's machine learning solutions with **NISQ quantum**.

## NISQ Quantum

There is significant hype in the media about the promise of fault-tolerant, fully-connected, full-scale quantum computers. These devices will enable the application of near-limitless computation to solve problems in drug discovery, finance, and security. The quantum computers required for these applications remain a distant future, as today, quantum computation is in the "Noisy Intermediate Scale Quantum" Era.

NISQ quantum computers are devices that have tens of qubits with limited connectivity, are impacted by environmental conditions (such as noise), have limited coherence-times, and require significant infrastructure to operate. They are limited in functionality and in performance, but they exist today.

{{< image src="images/technologies-4-ibm-quantum.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}


Several companies, such as startups like D-Wave, Xanadu, Rigetti, Psi-Quantum, and Ion-Q to established players such as IBM and Honeywell are investing significant financial and engineering resources to advance NISQ quantum. Many of them offer quantum computing over cloud distribution, much like many cloud computing services such as AWS or Azure. These companies have spawned an ecosystem of start-ups that are building quantum solutions at different layers of the "quantum stack", whether they are advancements to quantum infrastructure, or applying quantum computers to real-world problems. As a result, there is an abundant and active research community in quantum computing, actively working together to overcome the challenge of quantum computing.


{{< image src="images/technologies-5-quantum-cloud.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

NISQ devices are being explored for many industries, and are interesting in 3 categories of problems that are relevant to intelligent radio:

- Sampling (modifying datasets as a pre-processing step for classical algorithms)
- Optimization (finding a global maximum, minimum, or a best-fit solution)
- Quantum machine learning (e.g. classification and categorization)

All 3 of these fit into a greater hybrid quantum-classical approach to applying machine learning to SDR. Qoherent applies quantum computing as a component within a larger system of processing data for intelligent radio workflows.

{{< image src="images/technologies-6-quantum-classical-hybrid.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}