interface CopyrightNoticeProps {
  // ? makes a property optional: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
  author: string;
  year: number;
}

export default function CopyrightNotice({
  author,
  year,
}: CopyrightNoticeProps): JSX.Element {
  // truthiness check: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

  const isAuthor = () => author.length <= 0

    return (
      <>
        <p>
          Copyright {year} , {author} {isAuthor () && 'but to nobody in particular'}
        </p>
      </>
    )
    }
//   if (author) {
//     return (
//       <>
//         <p>
//           Copyright {year}, {author}
//         </p>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <p>Copyright {year} (but to nobody in particular)</p>
//       </>
//     );
//   }
// }
