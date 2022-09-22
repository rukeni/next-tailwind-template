/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export const handlers = [
  rest.get('https://example.com/reviews', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          author: '길동쓰',
          content: '맛있는 바나나 👍 🍌',
          id: '31',
        },
      ])
    );
  }),
];
