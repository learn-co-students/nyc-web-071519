require 'rest-client'
require 'pry'
require 'json'

class Book
    
    def self.fetch_books
        user_response = gets.chomp 
        binding.pry
        response = RestClient.get("http://localhost:3005/books")
        JSON.parse(response)
    end
    
    def self.create_books
        fetch_books.each do |book|
            #Our table columns have to match the keys in the hash
            Book.create(title: book.title, author: book.author)
        end
    end
    
    def find_author
        puts "What book do you want?"
        title = gets.chomp
        book = Book.find_by(title: title)
        puts book.author 
    end 
end

Book.fetch_books