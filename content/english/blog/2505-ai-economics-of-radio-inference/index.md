---
title: "The New Economics of Radio Inference"
date: "2025-05-17"
cover:
    # image img/example.jpg
    alt: 'The New Economics of Radio Inference'
    caption: 'Looking at radio inference through an economic lens helps us understand how it will unlock more spectrum and build the next generation of wireless technologies.'
tags: ['SDR','AI',"RIA","5G", "radio inference"]
categories: ['articles']
---



## Key Points:
- Looking through an economic lens, as AI makes predictions cheaper, it **increases the value of economic complements**.
- Cutting through the hype, AI through **radio inference**, can dramatically improve capacity, security, and power consumption in nearly all wireless communications applications
- Radio inference applications can be deployed in any system, including 5G base stations, military RADARs, and other wireless systems, enabling sharing and coexistence
- **Radio inference applications** reduce the cost of complements such as new capability, robustness, predictability, and iteration cycles. 
- Problem formulation and dataset generation are the largest hurdles and are addressable through tools that facilitate waveform synthesis, model production, and model training at scale.
- While technical hurdles remain, radio inference could begin delivering economic benefit almost immediately as an add-on component to many deployed systems


{{< toc >}}


Artificial intelligence (AI) is the subject of immense technical hype, reshaping many fields across business, science, and everyday life. AI-based chatbots, routing, and recommendation systems are now household products, providing directions on maps, spam filters, music playlists, and matching algorithms. While these systems have demonstrated significant economic value and improved quality of life, the role of AI as a core piece of telecommunications is still emerging.

Radio spectrum is crowded and dynamically changing, and to meet consumers' insatiable demands for data, radio will need to be more intelligent.  Cell phones, satellites, and military systems will need to adapt to their environment, co-exist, and even share spectrum. the technology and economics are coming together, powered by recent leaps in AI-based prediction, not using mainstream models, but miniaturized low-cost, low-power models with specialized training that can be deployed on mobile devices themselves.

AI will be an important part of the future of wireless communications. AI is currently under study for inclusion into OpenRAN and 3GPP standardization [1][2]. AI promises to bring unparalleled security, robust interference handling, and ultra-scale capacity to future 6G networks. 

But with any technology, it is important to look past the hype and understand the fundamentals and the source of core value. When deep learning started to become mainstream, economists looked at the use of AI inference, where a trained model makes a prediction based on input data. In the 2018 book, Prediction Machines: The Simple Economics of Artificial Intelligence, the authors explored the value of AI inference using economics. The core insight derived from economics is that when something becomes cheaper, demand for its complements increases, making those complements more valuable. Machine learning (ML) makes predictions cheaper, in turn increasing the demand for complements such as data and judgment [3][4].


{{< image src="images/demand_curve.png" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">
_As the cost of prediction increases, the value of complements increases_</p>

The concept directly applies to radio technology and wireless data networks. We can use AI inference to make predictions analogous to traditional signal processing tasks. These tasks analyze radio frequency (RF) signals onboard our wireless devices to make real-time decisions around modulation recognition, interference mitigation, and spectrum sensing. The process of *"radio inference”* can be deployed in any system, including 5G base stations, military RADARs, and other wireless systems, enabling sharing and coexistence by enabling prediction and classification directly from radio signals. We examine how making these capabilities cheaper creates value for the next generation of wireless technologies.


{{< image src="images/radio-inference.png" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">
_AI models perform inference directly on signal data._</p>

## 1. Reducing the cost of new capability.
State-of-the-art wireless systems run on handcrafted algorithms limited by human intuition.  ML models can detect patterns beyond human cognition, unlocking new signal processing capabilities that would be impractical, expensive, or impossible to design using traditional engineering approaches.

For example, neural networks can learn to dynamically adapt transmitted waveforms to maximize throughput given the conditions of the environment, finding signal configurations that were not explicitly programmed and might not follow classical communications theory.

They can perform sensing tasks using communication signals never designed for that purpose. They can detect and classify complex signal patterns that would require prohibitively expensive feature engineering with classical approaches - for example, AI-based mmWave beam management has achieved up to 25% higher received power [6].

When ML reduces the cost of adding new capabilities, existing radio infrastructure becomes more valuable by serving multiple purposes or enabling entirely new applications. This expands what's possible with the same physical infrastructure.

Joint Communications and Sensing (JCAS) is an example of this principle. AI-enhanced positioning as part of a JCAS system demonstrated up to 50% improved location tracking accuracy in challenging urban environments [5]. By adding ML inference to existing 5G base stations, a network can be leveraged for new applications and new business models.

The same cellular network that provides connectivity can now track assets in mines, monitor traffic in cities, perform occupancy detection in shopping malls, all using the same spectrum and hardware. A reduced cost of new capabilities can transform the economics of network deployment, creating entirely new revenue streams from the same physical assets.


{{< image src="images/jcas.png" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">
_Onboard radio inference drives sensing as the basestation is used for communications._</p>

## 2. Reducing the cost of robustness
Traditional handcrafted radio solutions are "closed form" with finite behaviour. They are designed for a limited number of standardized channel models [5]. The real-world, in contrast, has nearly infinite variability in propagation environments. Urban canyons, weather effects, and countless other factors can impact signals in ways that standard models can't capture. Increasing the robustness of classical solutions require engineering for every edge case, which scales the cost of engineering.

Radio inference dramatically reduces the cost of robustness. ML models can be trained on a broad set of conditions, whether present in nature or synthetically derived, resulting in more flexibility than software which performs better in more conditions, and in many cases outperforms handcrafted counterparts. For example, ML-based waveform adaptation can dynamically optimize transmission to maximize throughput in any channel environment, not just the standardized cases. 

Instead of expensive engineering for all edge cases or accepting degraded performance (lost revenues from spectrum usage), adaptability, flexibility, and performance are built in. Infrastructure such as satellites and base stations become more valuable because they are more reliable across more conditions. Spectrum licenses become more valuable because more capacity is possible across many conditions. As robustness becomes cheaper, radios, spectrum, and networks become more useful.

## 3. Reducing the cost of predictability in execution and performance
In computing, algorithmic complexity typically focuses on how execution time scales with input size. But for real-time systems like radios, understanding execution time variability is equally critical. Many classical signal processing applications, like signal acquisition, synchronization, or interference detection, have execution times that vary dramatically based on signal conditions. These applications contain components that include search, iteration, and logical branching algorithms, all resulting in a system completing its task in a range from microseconds to minutes. This variability and uncertainty has engineering implications.

In most implementations of deep learning, models consist of a fixed number of layers. Execution of deep learning models is simply a function of data passing through the network, in a fixed number of clock cycles, occurring within predictable timing bounds. Model performance is also characterized statistically. Models don't always succeed, but it is possible to bound the probability of failure and design to a reliability target. This predictability in timing and performance transforms how we design radio systems.

Consider satellite acquisition: when a ground station loses a link, traditional algorithms must search across frequency, time, and space. This process could take seconds or hours depending on conditions. An ML-based acquisition model will produce an inference output in constant time, every time. Even if the first prediction fails, the retry timing is predictable, and is bound within measurable rates of failure, as defined by the training of the model. 
This predictability reduces the cost of system design. When execution time is fixed and performance is statistically bounded, engineers can eliminate over-provisioning. Hardware can be sized precisely, computation resources can be scheduled efficiently, system design can be more reliable, and link and timing budgets become exact rather than worst-case estimates. The engineering process becomes about optimization rather than uncertainty management, allowing systems to operate at higher utilization, and guarantee specific performance levels.


## 4. Reducing the cost of iteration cycles.
With the appropriate tooling and computation, ML models enable RF engineers to rapidly conceptualize, prototype, and deploy sophisticated algorithms. Traditional RF algorithm development requires months of mathematical modelling, simulation, and validation. ML lets RF engineers reduce or avoid lengthy algorithm development and focus on defining the problem, creating data, and designing the system, while letting the algorithm learn from the signals themselves. The result is increased time on high-value decisions while reducing overall development time.

Model development, through ML Ops tooling, enables rapid iteration based on real-world performance. When a deployed application encounters new conditions, engineers can quickly adapt by retraining with updated data rather than redesigning the entire algorithm from first principles. This agility is particularly valuable in dynamic RF environments.

Consider a satellite gateway with a model that dynamically schedules satellite traffic. Its model might need retraining as the environment changes or new traffic patterns emerge. Instead of going through a lengthy algorithm R&D cycle, the engineers who support the system can focus on understanding the changing conditions and guiding model adaptation. The model can be retrained in a day, compared to months of algorithm redesign.

Faster iteration cycles don't replace engineering expertise; they amplify its impact. Engineers spend less time on integration and full-cycle development and more time on innovation, allowing their contributions to have more valuable outcomes.


{{< image src="images/ria_workflow.png" caption="" alt="alter-text" height="" width="" position="center" option="q100" class="img-fluid" title="image title"  webp="false" >}}<p style="text-align: center;font-style: italic;">
_Development of radio inference applications._</p>


## Trade-offs and Challenges in Radio Inference

While radio inference offers compelling economic benefits, several challenges limit its implementation and effectiveness:

Problem Formulation Complexity: Defining what to infer, what to compartmentalise, how to process data, and which ML approach to use requires significant expertise and care. Engineers must make nuanced decisions about data representation, feature extraction, and model design. There are no one-size-fits-all solutions. The best practices of ML don’t always scale to digital signal processing, and vice versa. A poorly formulated problem may result in models focusing on undesirable signal features inherent to the data. Problem formulation requires an understanding of the nuance in multiple specialized domains, making standardization difficult.

**Dataset Generation:** Creating high-quality datasets for radio inference is inherently difficult. Manual dataset production typically follows an ad-hoc, iterative process that becomes error-prone, time-consuming, and labour-intensive. Building signal emulation testbeds requires significant capital investment and often has limited reusability across different models. When creating synthetic or testbed data, accurately recreating the complex conditions of real-world RF environments demands specialized expertise and careful validation.

**Vast Design Space:** Finding optimal radio inference solutions involves navigating complex engineering trade-offs across multiple dimensions. Training strategies, compression techniques, and optimization techniques all introduce performance impacts. When combined with hardware-specific optimizations and application requirements, the design space becomes exponentially complex. Experts typically rely on heuristics and experience, but the vast number of possible configurations makes finding truly optimal solutions for specific applications computationally prohibitive.

**Resource Constraints vs. Performance:** Radio inference faces an inverse challenge to other AI fields like LLMs. While language models process small inputs on massive servers with relaxed latency requirements, radio systems must continuously process terabytes of data with sub-millisecond latency on highly constrained hardware. This inversion creates significant design challenges. Existing handcrafted algorithms often provide efficient solutions with minimal resource requirements, making it essential to target radio inference toward applications where its benefits clearly justify its usage.

These challenges represent obstacles to implementing radio inference effectively, but they don't negate the economic benefits. They highlight where targeted investment in specialized tools, expertise, and infrastructure can unlock substantial value. Understanding these trade-offs allows strategic deployment of radio inference where its advantages outweigh its complexities.

When deployed appropriately, radio inference enables a virtuous cycle where faster development, extensive adaptability, predictable performance, and novel capabilities reinforce each other. Engineers can rapidly deploy solutions that work robustly across diverse conditions, unlocking applications that weren't previously feasible. As wireless spectrum becomes increasingly congested, contested, and complex, these benefits will become crucial in ensuring that spectrum can be used more effectively, fairly, and profitably.


# About Qoherent
Unlocking the value of radio inference is the mission of Qoherent. Qoherent is a technology company that specializes in AI development on software-defined radios, focusing on streamlining the workflow for radio signal processing engineers and researchers in wireless technologies with software and IP products. We are working on products that help accelerate the formulation, development, and deployment of radio inference models directly onto SDR-enabled hardware, and offer R&D services for companies interested in building the next generation of wireless communications and RF sensing equipment with AI. At Qoherent, we understand that these economic principles directly impact the future of wireless. By enabling engineers to develop and deploy radio inference models more efficiently, we help them create the economic value that is possible from AI.

[1] O-RAN Alliance, "O-RAN Intelligence and RAN Intelligent Controller (RIC) - Use Cases and Deployment Scenarios,"

[2] 3GPP TR 38.843, "Study on artificial intelligence (AI)/machine learning (ML) for NR air interface," Release 18, 2023.

[3] Agrawal, A., Gans, J., & Goldfarb, A. (2018). Prediction Machines: The Simple Economics of Artificial Intelligence. https://www.predictionmachines.ai

[4] "The economics of artificial intelligence." 2016 McKinsey & Company. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-economics-of-artificial-intelligence

[5] For example, 3GPP defines the usage of models like EPA, EVA, ETU for LTE, and TDL/CDL models for 5G NR.

[6] "Towards an AI-native communications system design," MWC 2023 demonstrations, July 2023. https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Towards-an-AI-native-communications-system-design.pdf