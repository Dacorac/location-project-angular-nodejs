const app = require('../../app');
const supertest = require('supertest');
const { TestScheduler } = require('jest');
const request = supertest(app);

test('Should create a new location', async () => {
    await request.post('/create')
        .send({
            name: "Colombia",
            area_m2: 5000
        })
        .expect(200)
});


