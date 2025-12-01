const app = require('./app');
const supertest = require('supertest');
// const {describe, it} = require('jest-circus')
const request = supertest(app);



describe("/test endpoint", ()  =>{
    it('should return success', async ()=> {
        const response = await request.get("/test");
        console.log(JSON.stringify(response))
        expect(response.status).toBe(200);
        expect(response.text).toBe("test response data");
    })
})

