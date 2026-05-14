const openApiDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Family Quiz API',
    version: '1.0.0',
    description: '가족 퀴즈 프로젝트 API 문서',
  },
  servers: [
    {
      url: 'http://localhost:10000',
      description: 'Local server',
    },
    {
      url: 'https://quiz-project-backend-gi9d.onrender.com',
      description: 'Render server',
    },
  ],
  paths: {
    '/': {
      get: {
        tags: ['Health'],
        summary: '백엔드 기본 연결 확인',
        responses: {
          '200': {
            description: '백엔드 연결 성공',
            content: {
              'text/html': {
                schema: {
                  type: 'string',
                  example: 'backend ok',
                },
              },
            },
          },
        },
      },
    },
    '/health': {
      get: {
        tags: ['Health'],
        summary: '서버 상태 확인',
        responses: {
          '200': {
            description: '서버 정상',
            content: {
              'text/html': {
                schema: {
                  type: 'string',
                  example: 'ok',
                },
              },
            },
          },
        },
      },
    },
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
  },
  components: {
    schemas: {
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
    },
  },
}

export default openApiDocument