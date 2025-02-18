import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;

    try {
        const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
            method: "POST",
            headers: { Authorization: `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` },
            body: JSON.stringify({ inputs: message }),
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }

        const reply = data.generated_text || "I'm not sure how to respond to that.";
        res.status(200).json({ reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch response from Hugging Face API' });
    }
}
