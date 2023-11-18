# An *h1* **header**
## An *h2* **header**
### An *h3* **header**
#### An *h4* **header**
##### An *h5* **header**
###### An *h6* **header**

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

* this one
* that one
* the other one
* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod mi, vitae viverra arcu.
  Aenean orci leo, tincidunt sit amet maximus id, vestibulum a lorem. 
  Sed tincidunt luctus purus, sed aliquet orci imperdiet ac.
  Aliquam risus sem, luctus vel felis nec, consectetur tincidunt nisi. Ut eu suscipit risus.
  Nullam imperdiet sem eget turpis egestas, ut congue risus porta.
  Morbi vitae ipsum malesuada, venenatis mauris nec, tempus tellus. Donec sodales fermentum felis vitae molestie.
  Nunc blandit malesuada erat, ut pretium est dignissim vitae.
  Nullam eget venenatis massa. Proin vitae erat eget felis pellentesque semper vel nec sem. 
  Sed quis porta metus, at rutrum augue. Morbi id eleifend dolor.
  Suspendisse pulvinar justo ac turpis efficitur, sed placerat orci eleifend.
  Nam risus lorem, mollis sed fringilla et, euismod et tortor.

- testing list with paragraphs
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed euismod mi, vitae viverra arcu.
  Aenean orci leo, tincidunt sit amet maximus id, vestibulum a lorem.
  Sed tincidunt luctus purus, sed aliquet orci imperdiet ac.
  Aliquam risus sem, luctus vel felis nec, consectetur tincidunt nisi. Ut eu suscipit risus.
  Nullam imperdiet sem eget turpis egestas, ut congue risus porta.
  Morbi vitae ipsum malesuada, venenatis mauris nec, tempus tellus. Donec sodales fermentum felis vitae molestie.
  Nunc blandit malesuada erat, ut pretium est dignissim vitae.

  Nullam eget venenatis massa. Proin vitae erat eget felis pellentesque semper vel nec sem.
  Sed quis porta metus, at rutrum augue. Morbi id eleifend dolor.
  Suspendisse pulvinar justo ac turpis efficitur, sed placerat orci eleifend.
  Nam risus lorem, mollis sed fringilla et, euismod et tortor.
Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.


> Single paragraph block quote.

## An h2 header

Here's a numbered list:

1. first item
2. second item
3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

```php
function loremFunction(string $dolor, string $amet): string {
    $sit = "{$dolor} {$amet}";
    $elit = 'consectetur adipiscing elit.';

    return "{$sit} {$elit}";
}
```

```typescript
function calcLorem(dolor: number, ipsum: number): number {
    let sit = dolor * ipsum
    let amet = dolor + ipsum

    return sit / amet
}
```

```
no language ipsum
```

### An h3 header

Now a nested list:

* Test
  * uwu
    * owo

1. First, get these ingredients:
   * carrots
   * celery
   * lentils
2. Boil some water.
3. Dump everything in the pot and follow
   this algorithm:

       find wooden spoon
       uncover pot
       stir
       cover pot
       balance wooden spoon precariously on pot handle
       wait 10 minutes
       goto first step (or shut off burner when done)

   Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size  material      color
----  ------------  ------------
9     leather       brown
10    hemp canvas   natural
11    glass         transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
keyword   text
--------  -----------------------
red       Sunsets, apples, and
other red or reddish
things.

green     Leaves, grass, frogs
and other things it's
not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
: Good for making applesauce.
oranges
: Citrus!
tomatoes
: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](example-image.jpg "An exemplary image")

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.