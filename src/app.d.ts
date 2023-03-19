/// <reference types="@sveltejs/kit" />

import type { FFFBase, FFFMention } from 'fff-flavored-frontmatter'

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly URARA_SITE_PROTOCOL?: 'http://' | 'https://'
  readonly URARA_SITE_DOMAIN?: string
}

interface ImportMeta {
  glob<Module = { [key: string]: unknown }>(pattern: string): Record<string, Module>
  readonly env: ImportMetaEnv
}

declare global {
  namespace Urara {
    namespace Post {
      type Frontmatter = Omit<FFFBase, 'flags'> &
        Pick<FFFMention, 'in_reply_to'> & {
          /**
           * post type.
           * @remarks auto-generated
           */
          type: 'article' | 'note' | 'photo' | 'reply' | 'audio' | 'video' | 'like' | 'repost' | 'bookmark'
          /**
           * post layout.
           */
          layout?: 'article' | 'note' | 'photo' | 'reply'
          /**
           * post path.
           * @remarks auto-generated
           */
          path: string
          /**
           * post slug.
           * @remarks auto-generated
           */
          slug: string
          /**
           * table of contents.
           * @remarks auto-generated, article-only, set to `false` to disable
           */
          toc?: false | Toc[]
          /**
           * the created date of the post.
           * @remarks auto-generated or set manually
           */
          created: string
          /**
           * the updated date of the post.
           * @remarks auto-generated or set manually
           */
          updated: string
          /**
           * the published date of the post.
           */
          published?: string
          /**
           * the featured image for article, or image for "photo" / "multi-photo" posts.
           * @remarks currently only supports string
           */
          image?: string
          /** enable some advanced features.
           * @property hidden - deprecated, transfer to `unlisted`
           * @property unlisted - hide this post from the homepage and feed.
           * @property bridgy-fed - add a link to Bridgy Fed in the post. https://fed.brid.gy/
           * @property bridgy-{target} - add a link to Bridgy in the post. https://brid.gy/publish/{target}
           */
          flags?: string[]
        }
      type Toc = {
        depth: number
        title?: string
        slug?: string
        children?: Toc[]
      }
      interface Module {
        default: {
          render: () => {
            html: string
            head: string
            css: {
              code: string
            }
          }
        }
        metadata: Frontmatter
      }
    }
    type Post = Post.Frontmatter & { html?: string }
    type Page = { title?: string; path: string }
  }
}
function createCustomCursor() {
       let cursor = document.getElementById('myCustomCursor');

        if (cursor) {
            console.log('myCustomCursor already exist');
            //addCursorSpecialEffectToAllPageLinks(cursor);
        } else {
            cursor = document.createElement("div");
            cursor.setAttribute("id", "myCustomCursor");
            document.body.appendChild(cursor);

            initCustomCursor(cursor);
            //addCursorSpecialEffectToAllPageLinks(cursor);
        }
    }

    
    function initCustomCursor(cursor) {
        document.body.onmousemove = function(e) {
            cursor.style.setProperty('--x', (e.clientX) + 'px');
            cursor.style.setProperty('--y', (e.clientY) + 'px');
        }
    }

    function addCursorSpecialEffectToAllPageLinks(cursor) {
        var links = document.querySelectorAll("a");

    // This for loop is used to find all the page links and add the "myCursorHoverState" css class to create special effect on hover
      for (var i = 0; i < links.length; i++) {
          var link = links[i].getAttribute("href");
          console.log(link);

          links[i].addEventListener("mouseenter", function(event) {
                console.log('In');
                cursor.classList.add("myCursorHoverState");
          }, false);

          links[i].addEventListener("mouseleave", function(event) {
                console.log('Out');
                cursor.classList.remove("myCursorHoverState");
          }, false);
      }
  }

  createCustomCursor();
