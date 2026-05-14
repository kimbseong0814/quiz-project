export const quizzesPaths = {
  '/api/quizzes': {
    get: {
      tags: ['Quizzes'],
      summary: '퀴즈 목록 조회',
      responses: {
        '200': {
          description: '퀴즈 목록 조회 성공',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Quiz',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  '/api/quizzes/{id}': {
    get: {
      tags: ['Quizzes'],
      summary: '퀴즈 상세 조회',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'number',
          },
          example: 1,
        },
      ],
      responses: {
        '200': {
          description: '퀴즈 상세 조회 성공',
        },
        '404': {
          description: '퀴즈를 찾을 수 없음',
        },
      },
    },
  },
}

export const quizzesSchemas = {
  Quiz: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        example: 1,
      },
      question: {
        type: 'string',
        example: '이 사진은 어떤 날의 추억일까요?',
      },
      imageUrl: {
        type: 'string',
        example: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800',
      },
      choices: {
        type: 'array',
        items: {
          type: 'string',
        },
        example: ['가족 여행', '생일 파티', '졸업식', '명절'],
      },
      answer: {
        type: 'string',
        example: '가족 여행',
      },
    },
  },
}