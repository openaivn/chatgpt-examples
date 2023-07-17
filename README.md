Các bước tải xuống và cài đặt API Key:

1. clone repo: `git clone https://github.com/openaivn/chatgpt-examples.git`
2. install node deps: `npm install`
3. copy file `.env.example` to new file `.env`
4. set OPENAI_API_KEY in `.env`

Đăng ký tài khoản và tạo [API Key miễn phí](https://cloud.openai.vn/#/Account/api-keys) tại địa chỉ:

> Link: [https://cloud.openai.vn/#/Account/api-keys](https://cloud.openai.vn/#/Account/api-keys)

1. Ví dụ demo đơn giản, mục đích để kiểm tra test:

> npx tsx demos/demo.ts

2. Mẫu chương trình demo tiến trình xử lý tạo cảm giác như AI đang gõ máy (typing).

> npx tsx demos/demo-on-progress.ts

3. Mẫu chương trình chat giữa người và AI:

> npx tsx demos/demo-conversation.ts

# Examples Usage

1. Sử dụng thư viện: `openai-edge`

> npx tsx examples/openai-edge/main.ts

2. Sử dụng thư viện: `openai`

> npx tsx examples/openai/main.ts
