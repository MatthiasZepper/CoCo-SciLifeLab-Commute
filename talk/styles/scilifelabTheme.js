//scilifelab.theme
export default {
  colors: {
    background: "#011627",
    text: "#ddd",
    primary: "#a7c947",
    scLime: "#a7c947",
    scTeal: "#045c64",
    scAqua: "#4c979f",
    scGrape: "#491f53",
    scLGray: "#e5e5e5",
    scMGray: "#a6a6a6",
    scDGray: "#3f3f3f",
  },
  styles: {
    CodeSurfer: {
      pre: {
        color: "scLGray",
        backgroundColor: "background"
      },
      code: {
        color: "scLGray",
        backgroundColor: "background"
      },
      tokens: {
        "comment cdata doctype": {
          fontStyle: "italic"
        },
        "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
          color: "scAqua"
        },
        "line-number": {
          opacity: 0.8,
          color: "scTeal"
        }
      },
      title: {
        backgroundColor: "background",
        color: "scLime"
      },
      subtitle: {
        color: "#d6deeb",
        backgroundColor: "rgba(10,10,10,0.9)"
      },
      unfocused: {
        // only the opacity of unfocused code can be changed
        opacity: 0.1
      }
    }
  }
};