class WavIcon extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get styles() {
		return `
		
			svg {
				width: 24px;
				height: 24px;
			}

			svg use {
				width: 100%;
				height: 100%;
			}
			
    `;
	}

	connectedCallback() {
		// this.style.display = 'inline-block';
		this.style.lineHeight = '0';
		this.icon = this.getAttribute('icon') ?? 'facebook';
		this.titulo = this.getAttribute('titulo') ?? this.icon;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
      <style>${WavIcon.styles}</style>
			<svg role="img">
				<use xlink:href="./assets/sprite.svg#${this.icon}"></use>
			</svg>
			`;
	}
}

customElements.define('wav-icon', WavIcon);
