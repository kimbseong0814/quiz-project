export const resultsPaths = {
  '/api/results': {
    get: {
      tags: ['Results'],
      summary: '퀴즈 결과 목록 조회',
      responses: {
        '200': {
          description: '퀴즈 결과 목록 조회 성공',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/QuizResult',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    post: {
      tags: ['Results'],
      summary: '퀴즈 결과 저장',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['score', 'total'],
              properties: {
                score: {
                  type: 'number',
                  example: 2,
                },
                total: {
                  type: 'number',
                  example: 3,
                },
              },
            },
          },
        },
      },
      responses: {
        '201': {
          description: '퀴즈 결과 저장 성공',
        },
        '400': {
          description: '잘못된 요청',
        },
      },
    },
  },
}

export const resultsSchemas = {
  QuizResult: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        example: 1,
      },
      score: {
        type: 'number',
        example: 2,
      },
      total: {
        type: 'number',
        example: 3,
      },
      createdAt: {
        type: 'string',
        example: '2026-05-11T09:00:00.000Z',
      },
    },
  },
}