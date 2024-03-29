---
title: "Downloads"
meta_title: "Sample RF Datasets and Recordings."
description: "Sample RF Datasets and Recordings."
image: "/images/5g.png"
draft: false

---

<!-- ## Custom RF Datasets for Model Training -->

{{< notice "note" >}}
**License**

The following downloads are made available under GPLv3. Qoherent can make an alternative license available for variants of the dataset (proprietary or open), for more information please contact us.

{{< /notice >}}

### Utilities for inspection and review:
- [IQ Engine](https://iqengine.org) 
- RIA Dataset and Recording inspector (coming soon!)

<!-- Just handles on submit and not on valid form submission will be changed later based on what contact page form does/what service it uses -->
<section class="section-md">
  <div class="container">
    <div class="row">
      <div class="md:col-10 lg:col-6 mx-auto">
        <!-- Change this to new qoherent form when made -->
        <form action="https://formspree.io/f/xdoqkevp" method="post" onsubmit=submitForm(event)>
          <div class="mb-6">
            <label for="email" class="form-label whitespace-nowrap">
              Enter your email to unlock download links! <span class="text-red-500">*</span>
            </label>
            <input
              id="email-download"
              name="email"
              class="form-input"
              placeholder="your.email@example.com"
              type="email" required />
          </div>
          <button type="submit" class="btn btn-primary">Enter</button>
        </form>
      </div>
    </div>
  </div>
</section>


### Synthetic Recordings (sigMF)
| Item        |      Notes      |  <span id="lock1">Download</span> |
| ------------- | :-----------: | ----: |
| Synthetic DVB-S2X Recordings (no message)   | Python Generated | <span id="lock2">Coming Soon...</span> |
| Synthetic Digitally modulated recordings (containing a message)      |   GNU Radio Generated    |   <span id="lock12">Coming Soon...</span> |

### 5G & LTE Recordings - SRSRAN (sigMF)
| Item        |      Notes      |  <span id="lock3">Download</span> |
| ------------- | :-----------: | ----: |
| SRSRAN Recordings     | 20 MHz | <span id="lock4">Coming Soon...</span> |
| SRSRAN Recordings     | 40 MHz | <span id="lock5">Coming Soon...</span> |
| ENCQOR 5GNR     | 40 MHz | <span id="lock6">Coming Soon...</span> |
| ENCQOR 5GNR     | 60 MHz | <span id="lock7">Coming Soon...</span> |
| ENCQOR LTE     |  | <span id="lock8">Coming Soon...</span> |

### RF Datasets (h5)
| Item        |      Notes      |  <span id="lock9">Download</span> |
| ------------- | :-----------: | ----: |
| Digital and Analog with AGWN      |  | <span id="lock10">🔒</span> |
| Digital and Analog with no impairments      |       |   <span id="lock11">🔒</span> |



<script>
  function submitForm(event) {
  // Adjust links as needed - Made the most sense this way since links will be different for each
  // document.getElementById("lock1").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock2").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock3").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock4").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock5").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock6").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock7").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock8").innerHTML = '<a href="">Link</a>';

  // document.getElementById("lock9").innerHTML = '<a href="">Link</a>';

  document.getElementById("lock10").innerHTML = '<a href="https://storage.googleapis.com/qoherent_external_drive/general_dataset_library/synthetic/qoherent_modulation_awgn.h5">Link</a>';

  document.getElementById("lock11").innerHTML = '<a href="https://storage.googleapis.com/qoherent_external_drive/general_dataset_library/synthetic/qoherent_modulation_unimpaired.h5">Link</a>';

  //document.getElementById("lock12").innerHTML = '<a href="">Link</a>'; // GNU Radio

  
    event.preventDefault(); 

    const formData = new FormData(event.target);
    // Change this to new qoherent form when made
    fetch('https://formspree.io/f/xdoqkevp', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('email-download').value = '';
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  }

</script>


<!-- {{< slider dir="images/gallery" class="ml-0" webp="true" command="Fit" option="" zoomable="true" >}} -->
{{< image src="images/iq_5GNR.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}