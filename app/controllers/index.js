class Index {
    static index(req, res) {
        try {
            res.status(200).json({ data: 'success' })
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default Index;