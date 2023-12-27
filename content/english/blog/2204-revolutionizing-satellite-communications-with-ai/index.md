---
title: "Revolutionizing Satellite Communications with AI"
date: "2022-04-13"
cover:
    # image img/example.jpg
    alt: 'Revolutionizing Satellite Communications with AI'
    caption: 'Revolutionizing Satellite Communications with AI.'
tags: ['SDR','AI',"satcom","satellite communications"]
categories: ['articles']
---

{{< image src="images/weekly-recap-from-the-expedition-lead-scientist.jpg" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">Photo credit: NASA's Marshall Space Flight Center</p>


Satellite communications is undergoing an industry-wide transformation. With the decreasing costs of launching satellites into orbit, the industry is able to economically serve new applications enabling anywhere wireless connectivity on a global scale. Satellites are getting smaller and less expensive with specialized payloads in low earth orbit providing scalability and lower latency communications. These trends have spawned a new era of space race, with companies like [Starlink](https://www.starlink.com/) (SpaceX) and [Kuiper](https://www.aboutamazon.com/news/innovation-at-amazon/amazon-makes-historic-launch-investment-to-advance-project-kuiper) (Amazon) competing for global domination as they launch massive constellations of 1000’s of new satellites with aspirations of 50,000’s in just the next few years, offering high throughput (up to 500Mbps) to individual users in remote and out of reach areas.

{{< image src="images/Starlink-Trail.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">Starlink Trail - Photo credit: Marco Langbroek</p>


This revolution creates new and unique challenges for the industry. Orbit is becoming very crowded and wireless spectrum is becoming increasingly contested. Interference, impairments, and distortion becomes more prevalent causing disruption to network operations. Systems must be dynamic, but satellites are resource-constrained, limited by size, weight, and power requirements. Standards are racing to catch up to meet demand with [5G non-terrestrial network](https://www.5gamericas.org/5g-and-non-terrestrial-networks/) (5G NTN) defining tight integration between satellite links and high-throughput, low latency 5G networks. But standards alone will struggle to keep up with the growing demands on these future networks.

{{< image src="images/cubesat_CSA.jpg" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">
_Cubesat concept, image credit: Canadian Space Agency_</p>



Artificial intelligence (AI) and Machine learning (ML) create opportunities to overcome the complexity with intelligence. AI provides a new approach to software design and deployment, which has already revolutionized other industries. AI is already [changing the way we do terrestrial communications](https://medium.com/qoherent/top-3-ways-ai-will-transform-5g-and-wireless-513683633487) and will be a core part of [future telecommunications standards](https://www.3gpp.org/release18).

AI will also revolutionize satellite communications and we explore a few examples below.


### **Detecting and adapting from impairments and interference, and jamming:**

The on-orbit environment is harsh and satellites are subject to many effects that interrupt operations. Blockages, atmospheric irregularities, and other ambient events on the spectrum all interfere with the wireless links between satellites and ground stations. In an increasingly cluttered low earth orbit, the likelihood of interference (intentional or unintentional) has also increased. There is also the possibility of jamming from malicious actors, most recently, the conflict in Ukraine coincided with the cyberattacks on [Viasat’s Ka-band satellite](https://www.satellitetoday.com/cybersecurity/2022/02/28/viasat-investigating-ka-sat-outage-due-to-potential-cyber-event/) constellation and [jamming of Starlink](https://spacenews.com/cyber-warfare-gets-real-for-satellite-operators/) terminals. AI can be trained to detect these types of impairments, and then adapt, allowing networks to overcome these events. AI can adapt by switching to more resilient waveforms, another part of the spectrum, or another path in the constellation.







{{< image src="images/busy-spectrum-1024x496.png" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">Photo credit: WebSDR.org / University of Twente</p>


### **Software that needs fewer computing resources**

Launching equipment into space is expensive and while the cost is decreasing, satellites have always been constrained by size, weight, and power. The trend toward smaller satellites has further constrained resources. With even less room for computational infrastructure, specialized circuitry, and power infrastructure on board, placing limitations on the software that can be deployed. AI signal processing algorithms can perform very complex tasks, and for many applications, they can be less compute-intensive than human-written algorithms. Models can also be optimized, reduced, and made very compact for deployment in-flight while providing the ability to be continuously retrained and redeployed on-orbit.



{{< image src="images/csp_pic_1.png" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">Photo Credit NASA.gov</p>


### **Better network operations**

Satellite communications infrastructure is an amalgamation of many dynamic systems. Massive networks with many layers coordinate ground stations and terrestrial networks with constellations in different orbits. Constellations have different purposes, spectrum is shared, and handoffs are frequent. AI will enable automated coordination of complex network operations while providing superior traffic management. New AI-based techniques such as intelligent beam hopping can manage competing user requirements, spectrum usage, and illumination patterns in real-time.


These are just a few examples of how AI will enable more robust, resilient, and scalable satellite networks. At Qoherent we are building the tools necessary for engineers to train and deploy AI into wireless communications and sensing applications. The algorithms these engineers produce will enable the next generation of satellite communications.



Click below to request participation in the **Qoherent Radio Intelligence Apps (RIA) Early Access Program.** Using the compressive set of tools within RIA, you can create datasets of recorded and synthesized baseband signals, build robust machine learning models, and test them for deployment readiness.

{{< button label="Request Early Access" link="https://docs.google.com/forms/d/1m4XrPbfuVDokKx6eJg8-nYIgwodWLAmrods-zsExe0U/edit" style="solid" >}}