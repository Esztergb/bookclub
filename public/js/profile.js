app.get('/profile', withAuth, async (req, res) => {
    try {
      // Fetch the user's favorite books from the database
      const userFavorites = await UserFavorites.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [
          {
            model: Book
          }
        ]
      });
  
      // Extract the favorite books from the result
      const favorites = userFavorites.map(favorite => favorite.Book);
  
      // Render the profile template and pass the favorites data
      res.render('profile', { favorites });
    } catch (err) {
      res.status(500).json(err);
    }
  });