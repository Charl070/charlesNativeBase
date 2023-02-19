import {useCallback, useState} from 'react';

const useGenerateWords = () => {
  const [words, setWords] = useState<string[]>([]);

  const wordsList: string[] = [
    'abstract',
    'array',
    'boolean',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'declare',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'null',
    'number',
    'object',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'string',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
  ];

  const getRandomWordFromList = () => {
    let randomIndex: number = Math.floor(Math.random() * wordsList.length);
    let randomWord: string = words[randomIndex];
    return randomWord;
  };

  const generateWords = useCallback(async () => {
    for (let i = 0; i <= 1000; i++) {
      if (i % 100 === 0) {
        setWords(prev => [...prev, 'beep boop']);
      } else if (i % 20 === 0) {
        setWords(prev => [...prev, 'boop']);
      } else if (i % 5 === 0) {
        setWords(prev => [...prev, 'beep']);
      } else {
        setWords(prev => [...prev, getRandomWordFromList()]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    generateWords,
    words,
  };
};

export {useGenerateWords};
