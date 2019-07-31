require_relative './spec_helper'
require_relative '../program'

# happy path <== yay it works!
# sad path <== yay it breaks!
# "angry path" <== edge cases

describe "palindrome?" do
  # let
  # expect
  #  .to eq(something)
  it "should return true if the string is a the same forwards and backwards" do
    expect(palindrome?("hannah")).to eq(true)
    expect(palindrome?("mom")).to eq(true)
  end

  it "should return false if the string is NOT the same forwards and backwards" do
    expect(palindrome?("green")).to eq(false)
  end

  # sentences
  it "should return true if the string is a the same forwards and backwards regardless of spaces" do
    expect(palindrome?("a man a plan a canal panama")).to eq(true)
  end

  # capitalization
  it "should return true if the string is a the same forwards and backwards and has capitalization" do
    expect(palindrome?("Hannah")).to eq(true)
  end

  # punctuation
  it "should return true regardless of punctuation" do
    expect(palindrome?("Hannah!")).to eq(true)
    expect(palindrome?("A man, a plan, a canal: Panama.")).to eq(true)
  end

  # empty string?
  it "should return false if the string doesn't have any letters or numbers" do
    expect(palindrome?("")).to eq(false)
  end

  # bad input => [1,2,3], true, 111
  it "should return _____ if the argument isn't a string" do
    expect { palindrome?(123) }.to raise_error(ArgumentError)
    expect { palindrome?(true) }.to raise_error(ArgumentError)
    expect { palindrome?({}) }.to raise_error(ArgumentError)
  end
end