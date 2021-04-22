import {css} from '@emotion/core'
import {bpMaxLG} from 'utils/breakpoints'
const Footnote = ({idName, children}: any) => {
  const footnoteStyles = css`
    .sidenote,
    .marginnote {
      float: right;
      clear: right;
      margin-right: -45%;
      width: 40%;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 0.82em;
      opacity: 85%;
      line-height: 1.3;
      vertical-align: baseline;
      position: relative;
      border-left: 2px solid #777c9b;
      padding-left: 10px;
    }
    label {
      cursor: pointer;
    }

    .sidenote-number {
      counter-increment: sidenote-counter;
    }

    .sidenote-number:after,
    .sidenote:before {
      position: relative;
      vertical-align: baseline;
    }

    .sidenote-number:after {
      content: counter(sidenote-counter);
      font-size: 0.9em;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
      color: #777c9b;
    }

    .sidenote:before {
      content: counter(sidenote-counter) ' ';
      font-size: 0.9em;
      top: -0.3rem;
      padding-right: 8px;
    }

    blockquote .sidenote,
    blockquote .marginnote {
      margin-right: -82%;
      min-width: 59%;
      text-align: left;
    }

    label.sidenote-number {
      display: inline;
    }

    label.margin-toggle:not(.sidenote-number) {
      display: none;
    }
    input.margin-toggle {
      display: none;
    }
    ${bpMaxLG} {
      label.margin-toggle:not(.sidenote-number) {
        display: inline;
      }

      .sidenote,
      .marginnote {
        display: none;
      }

      .margin-toggle:checked + .sidenote,
      .margin-toggle:checked + .marginnote {
        display: block;
        float: left;
        left: 1rem;
        clear: both;
        width: 95%;
        margin: 1rem 2.5%;
        vertical-align: baseline;
        position: relative;
      }
    }
  `

  return (
    <span css={footnoteStyles}>
      <label htmlFor={idName} className="margin-toggle sidenote-number"></label>
      <input type="checkbox" id={idName} className="margin-toggle" />
      <span className="sidenote">{children}</span>
    </span>
  )
}

export default Footnote
