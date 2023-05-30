/* eslint-disable max-classes-per-file */
import { LitElement, html, css } from 'https://offshoot.prod.archive.org/lit.js'

customElements.define('bt-page', class extends LitElement {
  static get styles() {
    return css`
:host {
  display: grid;
  width: 100%;
  height: 250px;
  height: 100%;
  grid-template-areas:
    "bt-header   bt-header"
    "bt-sidebar  bt-posts"
    "bt-sidebar  bt-footer";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}
`
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<slot></slot>`
  }
})


customElements.define('bt-header', class extends LitElement {
  static get styles() {
    return css`
:host {
  grid-area: bt-header;
  text-align: center;
  background-color: #8ca0ff;
}
`
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<slot></slot>`
  }
})


customElements.define('bt-sidebar', class extends LitElement {
  static get styles() {
    return css`
:host {
  grid-area: bt-sidebar;
  background-color: #ffa08c;
  padding: 10px;
}
`
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<slot></slot>`
  }
})


customElements.define('bt-posts', class extends LitElement {
  static get styles() {
    return css`
:host {
  grid-area: bt-posts;
}
`
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<slot></slot>`
  }
})


customElements.define('bt-post', class extends LitElement {
  static get styles() {
    return css`
:host {
  display: block;
  border-radius: 5px;
  background-color: yellow;
  text-align: center;
  border: 1px dashed orange;
  margin: 10px;
}
`
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<slot></slot>`
  }
})


customElements.define('bt-footer', class extends LitElement {
  static get styles() {
    return css`
:host {
  grid-area: bt-footer;
  background-color: #8cffa0;
  overflow: hidden;
}
`
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<slot></slot>`
  }
})
