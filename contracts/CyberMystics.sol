// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error CyberMystics__SupplyExceeded();
error CyberMystics__InsufficientNftMintFee();
error CyberMystics__WithdrawalTransferFailed();

contract CyberMystics is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
	using Counters for Counters.Counter;

	Counters.Counter private _tokenIdCounter;
	uint256 public constant MAX_SUPPLY = 10;
	uint256 private s_mintFee = 0.01 ether;
	string[] internal s_CMUris = [
		"ipfs://Qmd7ptGdeQHSDDfbvTFKmbkfeD681oV5hKYnacbtZwRrRQ",
		"ipfs://QmTWJts7HUzcgJtmAYtF3eWTdL8syTn3rBaHiM5NhNLKxK",
		"ipfs://Qmdnz6MYABHMWo8163sK4aupQf4P8NkywxQXCaPaUW27gV",
		"ipfs://QmRzG4nfxPKM6crba9A1y3ZDn5kCy3wcetBtg2MfrcSMaL",
		"ipfs://QmWwsGjFBhCydTUth9sjPnmRNiJjqhCYpPmtRPsojg8a9n",
		"ipfs://QmTsnTEyXR198VXxgtBecQsCuXTkzG6WAPiw4zxRaHh7A3",
		"ipfs://QmeVQpt6XtrpzakwV7abdmpZcL6biSFycNJEKp4Pz32Syt",
		"ipfs://QmU7RRP7PQnsmgryewVjVyBndD1mRcAnJ1zWt8dFxQa9cP",
		"ipfs://QmNo56Y69VPASkfur3VpbkNYSVdLqXh6SmSPRjUojLtoc2",
		"ipfs://Qmbj6ubkuYFyNwArfTxoEgvgGDy86pfWdZaoL21nABaVMA"
	];

	// Events
	event NftMinted(uint256 indexed tokenId, address indexed minter);

	constructor() ERC721("CyberMystics", "CM") {}

	function mintNft() public payable {
		if (msg.value < s_mintFee) {
			revert CyberMystics__InsufficientNftMintFee();
		}

		if (_tokenIdCounter.current() >= MAX_SUPPLY) {
			revert CyberMystics__SupplyExceeded();
		}

		uint256 tokenId = _tokenIdCounter.current();
		_safeMint(msg.sender, tokenId);

		string memory metadata = s_CMUris[tokenId];
		_setTokenURI(tokenId, metadata);
		_tokenIdCounter.increment();

		emit NftMinted(tokenId, msg.sender);
	}

	function _beforeTokenTransfer(
		address from,
		address to,
		uint256 tokenId,
		uint256 batchSize
	) internal override(ERC721, ERC721Enumerable) {
		super._beforeTokenTransfer(from, to, tokenId, batchSize);
	}

	function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
		super._burn(tokenId);
	}

	function tokenURI(
		uint256 tokenId
	) public view override(ERC721, ERC721URIStorage) returns (string memory) {
		return super.tokenURI(tokenId);
	}

	function supportsInterface(
		bytes4 interfaceId
	) public view override(ERC721, ERC721Enumerable) returns (bool) {
		return super.supportsInterface(interfaceId);
	}

	function withdraw() public onlyOwner {
		uint256 amount = address(this).balance;
		(bool success, ) = payable(msg.sender).call{value: amount}("");

		if (!success) {
			revert CyberMystics__WithdrawalTransferFailed();
		}
	}
}
