---
title: "Elements"
# meta title
meta_title: ""
# meta description
description: "This is meta description"
# save as draft
draft: false
---

{{< toc >}}

Here is an example of headings. You can use this heading by the following markdown rules. For example: use `#` for heading 1 and use `######` for heading 6.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

<hr>

### Emphasis

The emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

The combined emphasis with **asterisks and _underscores_**.

Strike through uses two tildes. ~~Scratch this.~~

<hr>

### Button

{{< button label="Button" link="/" style="solid" >}}

<hr>

### Link

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
<http://www.example.com> or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.themefisher.com
[1]: https://gethugothemes.com
[link text itself]: https://www.getjekyllthemes.com

<hr>

### Paragraph

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

### Ordered List

1. List item
2. List item
3. List item
4. List item
5. List item

<hr>

### Unordered List

- List item
- List item
- List item
- List item
- List item

<hr>

### Notice

{{< notice "note" >}}
This is a simple note.
{{< /notice >}}

{{< notice "tip" >}}
This is a simple tip.
{{< /notice >}}

{{< notice "info" >}}
This is a simple info.
{{< /notice >}}

{{< notice "warning" >}}
This is a simple warning.
{{< /notice >}}

#### Adding a custom notice

The following code:

```bash
{{</* notice "Notice title" */>}}
This is a demo of a custom notice.
{{</* /notice */>}}

<style>
    .notice.Notice.title {
        color: #1b83e2;
        border-color: currentColor;
    }
</style>

<script>
document.querySelector('.notice.Notice.title .notice-head svg').outerHTML = `
<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"/>
</svg>
`;
</script>

```
Creates the following notice: 

{{<notice "Notice title" >}}
This is a demo of a custom notice.
{{< /notice >}}

<style>
    .notice.Notice.title {
        color: #1b83e2;
        border-color: currentColor;
    }
</style>

<script>
document.querySelector('.notice.Notice.title .notice-head svg').outerHTML = `
<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"/>
</svg>
`;
</script>


Note: The class selector of the CSS must target the `notice.{notice_title}`. For the javascript, it will always be `.notice.{notice_title} .notice-head svg`. 

Note 2: The `fill` property of the SVG must be set to `currentColor` as shown above. The `width` and `height` should both be `20` to stay in line with the other notices.

<hr>

### Customizing Image Size in Markdown

To customize the image size in Markdown, we need to make use of HTML. To accomplish this, we can do:

```HTML
<img src="attachments/sc2430-usrp-x410.png" alt="SCM2430 + USRP X410 System" width="700" height="300"/>
```

Where the width and height can be specified. If you need to center as well you would do: 

```HTML
<p align="center">
  <img src="attachments/sc2430-usrp-x410.png" alt="SCM2430 + USRP X410 System" width="700" height="300"/>
</p>
```

This would for example, be replacing something like `![SCM2430 + USRP X410 System](attachments/sc2430-usrp-x410.png)`

### Modifying fine print style

To modify the style of fine print in Markdown, we need to use inline HTML. 

This is an example of the standard rendered: 

*\* The computer impacts gNodeB performance and configuration such as bandwidth it can support. For more details on computer requirements, see **__[this guide](https://docs.srsran.com/projects/4g/en/latest/app_notes/source/hw_packs/source/index.html)__** from SRS*  
*\*\* SFP+ NIC's are compatible with an appropriate adapter. [Please see the Ettus support page.](https://kb.ettus.com/X410#Guidance_on_SFP.2B_Adapters_for_Fiber_Connectivity_on_NI_Ettus_USRP_X410)*  
*\*\*\* Other USRP's such as the B210 or X310 may be used with some extra configuration and timing controls.*

Modifying and adding inline HTML/CSS like so:

```HTML
<div class="fine-print">

*\* The computer impacts gNodeB performance and configuration such as bandwidth it can support. For more details on computer requirements, see **__[this guide](https://docs.srsran.com/projects/4g/en/latest/app_notes/source/hw_packs/source/index.html)__** from SRS*  
*\*\* SFP+ NIC's are compatible with an appropriate adapter. [Please see the Ettus support page.](https://kb.ettus.com/X410#Guidance_on_SFP.2B_Adapters_for_Fiber_Connectivity_on_NI_Ettus_USRP_X410)*  
*\*\*\* Other USRP's such as the B210 or X310 may be used with some extra configuration and timing controls.*

</div>

<style>
  .fine-print p em, .fine-print {
    font-size: 0.75rem; 
    color: #ffffff;
    line-height: 1.15;
    font-style: normal;
    font-weight: bold;
  }
</style>

```

Would instead render this as: 

<div class="fine-print">

*\* The computer impacts gNodeB performance and configuration such as bandwidth it can support. For more details on computer requirements, see **__[this guide](https://docs.srsran.com/projects/4g/en/latest/app_notes/source/hw_packs/source/index.html)__** from SRS*  
*\*\* SFP+ NIC's are compatible with an appropriate adapter. [Please see the Ettus support page.](https://kb.ettus.com/X410#Guidance_on_SFP.2B_Adapters_for_Fiber_Connectivity_on_NI_Ettus_USRP_X410)*  
*\*\*\* Other USRP's such as the B210 or X310 may be used with some extra configuration and timing controls.*

</div>

<style>
  .fine-print p em, .fine-print {
    font-size: 0.75rem; 
    color: #ffffff;
    line-height: 1.15;
    font-style: normal;
    font-weight: bold;
  }
</style>

### Tab

{{< tabs >}}
{{< tab "Tab 1" >}}

#### Did you come here for something in particular?

Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.

{{< /tab >}}

{{< tab "Tab 2" >}}

#### I wanna talk about the assassination attempt

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Tab 3" >}}

#### We know you’re dealing in stolen ore

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo

{{< /tab >}}
{{< /tabs >}}

<hr>

### Accordions

{{< accordion "Why should you need to do this?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "How can I adjust Horizontal centering" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "Should you use Negative margin?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

<hr>

### Code and Syntax Highlighting

This is an `Inline code` sample.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

<hr>

### Blockquote

> Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once.

<hr>

### Tables

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

<hr>

### Image

{{< image src="images/image-placeholder.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

<hr>

### Gallery

{{< gallery dir="images/gallery" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Slider

{{< slider dir="images/gallery" class="max-w-[600px] ml-0" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Youtube video

{{< youtube ResipmZmpDU >}}

<hr>

### Custom video

{{< video src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="rounded-lg" >}}

### Adding CSS styles to title/page headers 

To add a text color use the following tailwind css style: text-{color}

All the colors from the Qoherent Palette have been added as folows 

Qoherent Gray - dark:qoherentgray
Qoherent Black - dark:qoherentblack 
Qoherent Purple - dark:qoherentpurple
Qoherent Pink - dark:qoherentpink
Qoherent Blue - dark:qoherentblue 

if you wanted to add the Qoherent pink color to all the titles for example, you would do: 

dark:text-qoherentpink

### Where to add text colors

If you want to add a color to all h1 headings then change the current CSS property text-white of all h1 tags in themes/hugoplate/assets/scss/base.scss to dark:text-qoherentcolor

If you want to change the h2 do the same for the h2 tags

If you want to change the color of titles in the page-header go to themes/hugoplate/layouts/partials/page-header and change the h1 class to dark:text-qoherentcolor

Note "color" is a placeholder so if you want gray you would do dark:qoherentgray

There will be comments in each of the css files to help

Examples:

<h1 class="dark:text-qoherentgray">I am gray text</h1>
<h1 class="dark:text-qoherentblack">I am black text</h1>
<h1 class="dark:text-qoherentpink">I am pink text</h1>
<h1 class="dark:text-qoherentblue">I am blue text</h1>
<h1 class="dark:text-qoherentpurple">I am purple text</h1>