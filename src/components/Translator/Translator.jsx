// import React, { useState } from 'react';
// import { translateText } from '../api';

// const Translator: React.FC = () => {
//   const [texts, setTexts] = useState('');
//   const [to, setTo] = useState('es');
//   const [result, setResult] = useState(null);

//   const handleTranslate = async () => {
//     const response = await translateText([{ Text: texts }], to);
//     setResult(response);
//   };

//   return (
//     <div>
//       <h2>Translator</h2>
//       <textarea
//         value={texts}
//         onChange={(e) => setTexts(e.target.value)}
//         placeholder="Enter text to translate"
//       />
//       <input
//         type="text"
//         value={to}
//         onChange={(e) => setTo(e.target.value)}
//         placeholder="Enter target language"
//       />
//       <button onClick={handleTranslate}>Translate</button>
//       {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
//     </div>
//   );
// };

// export default Translator;
